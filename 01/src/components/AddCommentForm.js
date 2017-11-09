import React, {Component} from 'react';

//styles
import '../style/inputs.css';

class AddCommentForm extends Component{
    state = {
        user: '',
        text: null
    };

    render(){
        return (
            <div>
                <h4>Добавить комментарий</h4>
                <form>
                    <input type="text" className={this.state.userClass} placeholder="Укажите имя" name='user' onChange={this.setVal}  />
                    <br/>
                    <textarea rows="10" placeholder="Ваш комментарий" value={this.state.user}>{this.state.user}</textarea>
                    <br/>
                    <textarea rows="10" placeholder="Ваш комментарий"></textarea>
                    <br/>
                    <input name="submit" type="submit" value="готово"/>
                </form>
            </div>
        );
    }

    setVal = (ev) =>{

        let val = ev.target.value;
        let userClass = 5 <= val.length && 10 >= val.length ? 'success-input' : 'error-input';

        this.setState({
            user: val,
            userClass: userClass
        });

    }

}

export default AddCommentForm;