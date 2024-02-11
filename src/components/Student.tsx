//Напишите компонент студента (Student), который принимает имя и фамилию и массив из студентов в качестве пропсов. Нужно вывести в компоненте имя и фамилию и среднюю оценку.
type Props = {
    name:string,
    surname:string,
    marks:number[]
};

function Student(props: Props) {
    // Расчет средней оценки
    const averageMark = props.marks.reduce((sum, mark) => sum + mark, 0) / props.marks.length;

    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Surname: {props.surname}</p>
            <p>AveMarks: {averageMark}</p>
        </div>
    );
}

export default Student;