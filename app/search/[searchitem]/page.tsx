

const page = ({ params }:any) => {
  console.log(params)
  return <h1>Dynamic Page: {params.searchitem}</h1>;
};


export default page;
