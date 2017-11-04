export default class Test{
    hello(name){
        alert(`привет ${name}`);
    }

    bye(name = 'Вася'){
        alert(`Пока ${name}`);
    }

}