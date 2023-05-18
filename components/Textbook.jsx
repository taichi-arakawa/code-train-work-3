// type TProps = {
//     content: string
// }

export const Textbook = ({ content }) => {
  // console.log(content);
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
};
