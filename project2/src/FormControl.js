function FormControl(props) {

    return (
        <div>
            <label for="question">{props.text}</label>
            <input class="form-control" type="text"/><br/>
        </div>
    )
}

export default FormControl;