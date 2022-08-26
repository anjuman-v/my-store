function navBar(){
    var  navbar =`<section id="header">
    <a href="#"><img src="img/logo.png" class="logo" alt="logo"></a>

    <div class="navbardiv">
        <ul class="navbar">
            <li><a class="active" href="#">Home</a></li>
            <li><a href="shop.html">Shop</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href=""><i class="fa-solid fa-bag-shopping"></i></a></li>
        </ul>
    </div>
</section>`
    return  navbar;
}

export default navBar