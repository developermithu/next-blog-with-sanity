import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import TheHeader from "../../components/Theheader";
import Head from "next/head";

// SyntaxHighlighter
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

function Post({ post }) {
  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  const myPortableTextComponents = {
    types: {
      image: ({ value }) => <img src={urlFor(value).url()} />,
      code: (props) => (
        <SyntaxHighlighter language={props.value.language} style={dracula}>
          {props.value.code}
        </SyntaxHighlighter>
      ),
    },
  };

  return (
    <>
      <TheHeader />

      <Head>
        <title>{post.title}</title>
      </Head>

      <div className="bg-gray-900 text-white p-10">
        <div className="max-w-5xl mx-auto border p-10">
          <h1
            className="text-center pb-5 text-4xl capitalize
      "
          >
            {post.title}
          </h1>
          <div className="w-14 mx-auto">
            <img src={urlFor(post.author.image)} alt={post.author.name} />
          </div>

          <div className="pt-3">
            <img src={urlFor(post.mainImage)} alt={post.title} />
          </div>

          <div className="p-10 prose prose-headings:text-white prose-p:text-white prose-blockquote:text-white prose-em:text-white prose-li:text-white prose-code:bg-gray-700 prose-code:p-1.5 prose-code:rounded prose-ol:text-white prose-ul:text-white prose-code:text-white prose-a:text-blue-600 hover:prose-a:text-blue-400 prose-a:no-underline ">
            <PortableText
              value={post.body}
              components={myPortableTextComponents}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const client = createClient({
  projectId: "r0riooy5",
  dataset: "production",
  apiVersion: "2022-07-15",
  useCdn: false,
});

// This function gets called at build time
export async function getStaticPaths() {
  const query = `*[_type=="post"]{
    _id,
    slug {
        current
    }
  }`;

  const posts = await client.fetch(query);

  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }));

  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    _createdAt,
    body,
    mainImage,
    author->{
        name,
        image
      }, 
  }`;

  const post = await client.fetch(query, {
    slug: params?.slug,
  });

  // Pass post data to the page via props
  return { props: { post } };
}

export default Post;
