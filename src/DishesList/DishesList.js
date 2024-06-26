export function DishesList({ data, title, tags }) {
  return (
    <>
      <h1>{title}</h1>
      {tags.map((tag) => (
        <div>{tag}</div>
      ))}
      <div>
        {data.map((sauce, index) => (
          <div key={index}>
            <img src={sauce.image} alt={sauce.title} />
            <h2>{sauce.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
}
