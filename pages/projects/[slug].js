//useSWR allows the use of SWR inside function components
// import useSWR from "swr";
// import Image from "next/image";
// import { HTMLProps } from "react";
// import Head from "next/head";
// import { HTMLAttributes } from "react";
// import styles from "../styles/Home.module.css";

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format


export default function Post({post}) {
  //Set up SWR to run the fetcher function when calling "/api/staticdata"
  //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
  

  //Handle the error state
//   if (error) return <div>Failed to load</div>;
//   //Handle the loading state
//   if (!data) return <div>Loading...</div>;
  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
  return (
    <div>
      
    </div>
  );
}
// export async function getStaticPaths() {
//     return {
//       paths: [{ params: { slug: '1' } }, { params: { slug: '2' } }],
//       fallback: false, // can also be true or 'blocking'
//     }
//   }
  function getProject(slug, data){
    console.log({data})
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getServerSideProps({query}) {
    console.log({query});
    let slug = query.slug;
    let url = "/api/staticdata";
    const res = fetch(url);
    const project = getProject(slug, (await res).json)
    return {
      // Passed to the page component as props
      props: { post: {} },
    }
  }