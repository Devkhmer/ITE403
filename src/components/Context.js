import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "ស្បែកជើងបុរស 01",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
                "description": "ស្បែកជើងដែលកំពុងរត់របស់បុរស ...",
                "content": "ស្បែកជើងដែលកំពុងរត់របស់បុរស Nike បដិវត្ត ៥ បានធ្វើចលនារបស់អ្នកដោយប្រើស្នោទន់ដើម្បីជួយអ្នកឱ្យមានផាសុខភាព។ ការរចនាតូចបំផុតសមនឹងនៅគ្រប់ទីកន្លែងដែលថ្ងៃរបស់អ្នកនាំអ្នក។",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "ស្បែកជើងបុរស 02",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
                "description": "ស្បែកជើងបុរសនីកទាំងនេះមានវាយនភ័ណ្ឌ ...",
                "content": "ស្បែកជើងបុរសនីកទាំងនេះមានវាយនភ័ណ្ឌប៉ាក់ទម្ងន់ស្រាលដែលរុំជើងរបស់អ្នកដោយផាសុកភាព។ ការពង្រឹងកែងជើងនិងការត្រួតគ្នាផ្តល់នូវភាពធន់និងភាពធន់។",
                "price": 19,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "ស្បែកជើងបុរស 03",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
                "description": "ឧបករណ៍ពាក់កណ្តាលស្នោទន់ផ្តល់នូវ​ ...",
                "content": "ឧបករណ៍ពាក់កណ្តាលស្នោទន់ផ្តល់នូវការបើកបររលូននិងមានស្ថេរភាពដែលធ្វើឱ្យស្បែកជើងដែលបុរសទាំងនេះត្រូវការ។ ជញ្ជាំងខាងក្រៅដែលមានវាយនភាពកាត់បន្ថយទំងន់របស់ស្បែកជើង។",
                "price": 50,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "ស្បែកជើងបុរស 04",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
                "description": "ឧបករណ៍ពាក់កណ្តាលស្នោទន់ផ្តល់នូវ​ ...",
                "content": "ឧបករណ៍ពាក់កណ្តាលស្នោទន់ផ្តល់នូវការបើកបររលូននិងមានស្ថេរភាពដែលធ្វើឱ្យស្បែកជើងដែលបុរសទាំងនេះត្រូវការ។ ជញ្ជាំងខាងក្រៅដែលមានវាយនភាពកាត់បន្ថយទំងន់របស់ស្បែកជើង។",
                "price": 15,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "ស្បែកជើងបុរស 05",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
                "description": "ស្បែកជើងបុរសនីកទាំងនេះមានវាយនភ័ណ្ឌ ...",
                "content": "ស្បែកជើងបុរសនីកទាំងនេះមានវាយនភ័ណ្ឌប៉ាក់ទម្ងន់ស្រាលដែលរុំជើងរបស់អ្នកដោយផាសុកភាព។ ការពង្រឹងកែងជើងនិងការត្រួតគ្នាផ្តល់នូវភាពធន់និងភាពធន់។",
                "price": 10,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "ស្បែកជើងបុរស 06",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
                "description": "ស្បែកជើងដែលកំពុងរត់របស់បុរស ...",
                "content": "ស្បែកជើងដែលកំពុងរត់របស់បុរស Nike បដិវត្ត ៥ បានធ្វើចលនារបស់អ្នកដោយប្រើស្នោទន់ដើម្បីជួយអ្នកឱ្យមានផាសុខភាព។ ការរចនាតូចបំផុតសមនឹងនៅគ្រប់ទីកន្លែងដែលថ្ងៃរបស់អ្នកនាំអ្នក។",
                "price": 17,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


