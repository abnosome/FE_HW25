//Создайте простой компонент кнопки (Button), который принимает текст кнопки в качестве пропсов и отображает этот текст внутри кнопки.
type Props = {
    text:string,
};

function Button(props:Props){
   
    return(
        <button>
       {props.text}
        </button>
    );
}

export default Button;