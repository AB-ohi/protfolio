import { TypeAnimation } from "react-type-animation";

const Type = () => {
    return (
        <div>
            <TypeAnimation className="text-lg"
      sequence={[
        'MERN Stack Developer.', 
        3000,
        'Being a developer',
        1000,
        ' is my dream !!',
        3000,
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
        </div>
    );
};

export default Type;