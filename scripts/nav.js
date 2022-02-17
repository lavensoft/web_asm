$(document).ready(() => {
    //Render components
    navBarComponent();
    footerComponent();
});

const navBarComponent = () => {
    const navHtml = `
    <div class="min-header-bar">
        <div class="wrap">
            <div class="title">
                <span>CODER POLY BLOG</span>
            </div>
            <div class="information">
                <span>MAIL: nhatsdevil@gmail.com</span>
                <div class="group">
                    <span class="link">VIE</span>
                </div>
                <div class="group">
                    <span class="link">ENG</span>
                </div>
            </div>
        </div>
    </div>
    <nav>
        <div class="wrap">
            <div class="container">
            <a href="/index.html"><img src="/assets/images/logo.png"/></a>
            <ul>
                <li class="${location.pathname == "/" ? "active" : ""}""><a href="/index.html">Trang Chủ</a></li>
                <li class="${location.pathname == "/tho.html" ? "active" : ""}"">
                    <a href="./tho.html">Bài Viết</a>
                    <div class="sub-menu">
                        <div class="wrap">
                            <div class="grid">
                                <div class="grid-item grid-item-4">
                                    <div class="sub-menu-item">
                                        <div class="banner">

                                        </div>
                                        <span class="title">Java</span>
                                    </div>
                                </div>
                                <div class="grid-item grid-item-4">
                                    <div class="sub-menu-item">
                                        <div class="banner">

                                        </div>
                                        <span class="title">C/C++</span>
                                    </div>
                                </div>
                                <div class="grid-item grid-item-4">
                                    <div class="sub-menu-item">
                                        <div class="banner">

                                        </div>
                                        <span class="title">Mẹo Vặt</span>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </li>
                <li class="${location.pathname == "/events.html" ? "active" : ""}""><a href="#">Sự Kiện</a></li>
                <li class="${location.pathname == "/gallery.html" ? "active" : ""}""><a href="/gallery.html">Gallery</a></li>
                <li class="${location.pathname == "/product.html" ? "active" : ""}""><a href="/product.html">Sản Phẩm</a></li>
                <li class="${location.pathname == "#" ? "active" : ""}""><a href="#">Liên Hệ</a></li>
                <li class="${location.pathname == "#" ? "active" : ""}""><a href="#">Góp Ý</a></li>
                <li class="${location.pathname == "#" ? "active" : ""}""><a href="#">Hỏi Đáp</a></li>
            </ul>
        </div>
        </div>
    </nav>
    `

    $("body").prepend(navHtml);
}

const footerComponent = () => {
    const html = `
        <footer>
            <div class="view-large" style="padding-bottom: 0">
                <div class="grid">
                    <div class="grid-item grid-item-12 footer-top">
                        <span class="follow-us">FOLLOW US ON:</span>
                    </div>
                    <div class="grid-item grid-item-3">
                        <span class="title">BÀI VIẾT</span>
                        <a class="link" href="#">Java</a>
                        <a class="link" href="#">C/C++</a>
                        <a class="link" href="#">Mẹo vặt</a>
                        <a class="link" href="#">Công nghệ</a>
                    </div>
                    <div class="grid-item grid-item-3">
                        <span class="title">SỰ KIỆN</span>
                        <a class="link" href="#">Sự kiện nổi bật</a>
                        <a class="link" href="#">Sự kiện trong tuần</a>
                        <a class="link" href="#">Sự kiện Tech</a>
                    </div>
                    <div class="grid-item grid-item-3">
                        <span class="title">SẢN PHẨM</span>
                        <a class="link" href="#">Glasses & Accessories</a>
                        <span class="title">GALLERIES</span>
                        <a class="link" href="#">Ảnh nổi bật</a>
                    </div>
                    <div class="grid-item grid-item-3">
                        <span class="title">LIÊN HỆ</span>
                        <a class="link" href="#">HOTLINE: 0938.415.997</a>
                        <a class="link" href="#">Mail: nhatsdevil@gmail.com</a>
                    </div>
                    <div class="grid-item grid-item-12 footer-bottom" style="position: relative">
                        <div class="grid-item grid-item-6">
                            <span class="copyright">Copyright © ${new Date().getFullYear()} Lavenes. All rights reserved.</span>
                        </div>
                        <div class="grid-item grid-item-6">
                            <div class="group">
                                <a class="link" href="#">Chính sách riêng tư</a>
                                <a class="link" href="#">Điều khoản sử dụng</a>
                                <a class="link" href="#">Site Map</a>
                            </div>
                        </div>
                        <span class="link">VN</span>
                    </div>
                </div>
            </div>
        </footer>
    `

    $("body").append(html);
}