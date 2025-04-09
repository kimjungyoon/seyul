// HBS 템플릿 import
import indexTemplate from './pages/index.hbs?raw'
import headerTemplate from './partials/header.hbs?raw'
import footerTemplate from './partials/footer.hbs?raw'
import Handlebars from 'handlebars'
import './scss/main.scss'  // SASS import 추가

// partial 템플릿 등록
Handlebars.registerPartial('header', headerTemplate)
Handlebars.registerPartial('footer', footerTemplate)

// 데이터
const data = {
    title: 'Vite + Handlebars',
    message: 'Hello from Handlebars!'
}

// 템플릿 컴파일 및 렌더링
const template = Handlebars.compile(indexTemplate)
document.getElementById('app').innerHTML = template(data) 