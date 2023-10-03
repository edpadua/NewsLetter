import tw from "tailwind-styled-components"



const Button = tw.button`
bg-blue-700 text-white  hover:bg-blue-600  px-4 py-2  text-base
`

export { Button };

const Form = tw.form`
w-1/2 bg-blue-800
`;
export { Form };


const Input = tw.input`
mb-4 appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
`;
export { Input };


interface TextAreaProps {
    rows: number;
}


const Textarea = tw.textarea<TextAreaProps>`
w-full h-24 px-4 py-2 mb-2 text-base text-gray-700 placeholder-gray-600 border focus:shadow-outline
`;
export { Textarea };