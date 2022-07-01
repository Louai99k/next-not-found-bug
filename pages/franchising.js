const Franchising = ({ context }) => {
  return <div>{context.name}</div>;
};

export default Franchising;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://admarket-backend.herokuapp.com/api/franchising",
    {
      method: "GET",
    }
  );
  const context = await res.json();

  if (context.error) {
    return {
      notFound: true,
      revalidate: 1,
    };
  }

  return {
    props: { context },
    revalidate: 1,
  };
};
