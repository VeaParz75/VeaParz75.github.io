// making a pill-shaped text field for all the skills to be rendered under BOTH research and experience
// TODO: add input for bg colour and text colour

const Pill = ({ text, bgc = "", tc = "", style = {} }) => {
  return (
    <div
    style={{
        backgroundColor: bgc, // takes bg colour as ip so i have to change that for each instance
        color: tc, // takes text colour as ip so i have to change that for each instance
        display: "inline-block",
        padding: "6px 16px",
        borderRadius: "9999px",
        fontFamily: "Nunito, sans-serif",
        fontWeight: 600,
        fontSize: "13px",
        textAlign: "center",
        ...style,
      }}>
      {text}
    </div>
  );
};

export default Pill;