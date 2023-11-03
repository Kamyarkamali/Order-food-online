import image1 from "./assets/foods/1.jpg"
import image2 from "./assets/foods/2.jpg"
import image3 from "./assets/foods/3.jpg"
import image4 from "./assets/foods/4.jpg"
import image5 from "./assets/foods/5.jpg"
import image6 from "./assets/foods/6.jpg"
import image7 from "./assets/foods/7.jpg"
import image8 from "./assets/foods/8.jpg"
import image9 from "./assets/foods/9.jpg"
import image10 from "./assets/foods/10.jpg"
import image11 from "./assets/foods/11.jpg"
import image12 from "./assets/foods/12.jpg"
import image13 from "./assets/foods/13.jpg"
import image14 from "./assets/foods/14.jpg"
import image15 from "./assets/foods/15.jpg"
import image16 from "./assets/foods/16.jpg"
import image17 from "./assets/foods/17.jpg"
import image18 from "./assets/foods/18.jpg"
import image19 from "./assets/foods/19.jpg"
import image20 from "./assets/foods/20.jpg"
import image21 from "./assets/foods/21.jpg"
import image22 from "./assets/foods/22.jpg"




const foods=[
    {id:1,name:"هات داگ",detailse:"هات داگ,سس,کاهو,خیارشور",price:65000,image:image1,category:"ساندویچ"},
    {id:2,name:"کریپسی قارج و پنیر",detailse:"فیله مرغ سوخاری,پنیر پیتزا,پنیر گودا,گوجه,خیار شور,سس مخصوص",price:125000,image:image2,category:"ساندویچ"},
    {id:3,name:"ساندویچ مرغ با قارچ و پنیر",detailse:"فیله مرغ سوخاری,پنیر پیتزا,فلفل دلمه ای,گوجه,خیار شور,سس مخصوص",price:265000,image:image3,category:"ساندویچ"},
    {id:4,name:"پیتزا مخصوص خانواده",detailse:"الباس مارتا لیونر، خشک و پپرونی، پنیر پیتزا، قارچ و فلفل دلمه ای",price:369500,image:image4,category:"پیتزا خانواده"},
    {id:5,name:"پیتزا رست بیف خانواده",detailse:"گوشت ریش شده، پنیر پیتزا، قارچ و فلفل دلمه ای",price:630000,image:image5,category:"پیتزا خانواده"},
    {id:6,name:"پیتزا مرغ و قارچ خانواده",detailse:"گوشت مرغ ریش شده، پنیر پیتزا، قارچ و فلفل دلمه ای",price:670000,image:image6,category:"پیتزا خانواده"},
    {id:7,name:"پیتزا مرغ و قارچ خانواده",detailse:"گوشت مرغ ریش شده، پنیر پیتزا، قارچ و فلفل دلمه ای",price:670000,image:image7,category:"پیتزا خانواده"},
    {id:8,name:"پیتزا سوخاری",detailse:"هار عدد فیله سوخاری، سس ویژه، قارچ، فلفل دلمه ای، پنیر",price:165000,image:image8,category:"پیتزا خانواده"},
    {id:9,name:"شف میکس",detailse:"دو عدد برگر ذغالی گوشت، نصف هات داگ، پنیرگودا، قارچ و پنیر",price:185000,image:image9,category:"پیتزا خانواده"},
    {id:10,name:"شف میکس",detailse:"دو عدد برگر ذغالی گوشت، نصف هات داگ، پنیرگودا، قارچ و پنیر",price:185000,image:image10,category:"پیتزا خانواده"},
    {id:11,name:"پیتزا پپرونی",detailse:"کالباس پپرونی، پنیر پیتزا، قارچ و فلفل دلمه ای",price:150000,image:image11,category:"پیتزا خانواده"},
    {id:12,name:"پیتزا مینی مخصوص",detailse:"کالباس مارتا لیونر، خشک و پپرونی، پنیر پیتزا، قارچ و فلفل دلمه ای",price:95000,image:image12,category:"پیتزا مینی"},
    {id:13,name:"پیتزا مینی مخصوص ژامبون",detailse:"ژامبون 90 درصد و 60 درصد، پنیر پیتزا، قارچ و فلفل دلمه ای، ذرت" ,price:12000,image:image13,category:"پیتزا مینی"},
    {id:14,name:"پیتزا مینی گوشت و قارچ",detailse:"گوشت گریل چرخ شده، پنیر پیتزا، قارچ و فلفل دلمه ای" ,price:15000,image:image14,category:"پیتزا مینی"},
    {id:15,name:"پیتزا مینی قارچ و پنیر",detailse:"قارچ، پنیر پیتزا، فلفل دلمه ای" ,price:95000,image:image15,category:"پیتزا مینی"},
    {id:16,name:"فیله سوخاری 7تکه",detailse:"7 تکه فیله سوخاری، سیب زمینی، سالاد کلم، نان، 3 نوع سس" ,price:215000,image:image16,category:"سوخاری"},
    {id:17,name:"قارچ سوخاری",detailse:"200 گرم قارچ سوخاری شده، سس" ,price:75000,image:image17,category:"سوخاری"},
    {id:18,name:"قارچ سوخاری",detailse:"200 گرم قارچ سوخاری شده، سس" ,price:75000,image:image18,category:"سوخاری"},
    {id:19,name:"برگر زغالی",detailse:"150 گرم گوشت، کاهو، سبزیجات، گوجه فرنگی، خیارشور" ,price:95000,image:image19,category:"برگر"},
    {id:20,name:"چیزبرگر",detailse:"دو عدد برگر گوشت ذغالی، قارچ، پنیر پیتزا، کاهو، سبزیجات، گوجه فرنگی، خیارشور" ,price:125000,image:image20,category:"برگر"},
    {id:21,name:"دوبل برگر",detailse:"دو عدد برگر گوشت ذغالی، کاهو، سبزیجات، گوجه فرنگی، خیارشور" ,price:135000,image:image21,category:"برگر"},
    {id:22,name:"برگر مرغ",detailse:"110 گرم گوشت مرغ، کاهو، سبزیجات، گوجه فرنگی، خیارشور" ,price:58000,image:image22,category:"برگر"},
]

export {foods};