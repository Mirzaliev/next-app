import {FirstLevelMenuItem} from "../interfaces/Menu.interface";
import CourseIcon  from '../layout/Menu/icons/courses.svg';
import ServicesIcon  from '../layout/Menu/icons/services.svg';
import ProductsIcon  from '../layout/Menu/icons/products.svg';
import BooksIcon  from '../layout/Menu/icons/books.svg';
import {TopLevelCategory} from "../interfaces/aliaspage.interface";


export const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses', name: 'Курсы', icon: <CourseIcon />, id: TopLevelCategory.Courses
  },
  {
    route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services
  },
  {
    route: 'products', name: 'Продукты', icon: <ProductsIcon/>, id: TopLevelCategory.Products
  },
  {
    route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books
  }
];
