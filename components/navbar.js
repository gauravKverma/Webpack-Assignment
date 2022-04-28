function navbar(){
    return `<div id="heading">
            <a href="index.html"id="brand"><p>NORDSTROM</p></a>
            <div id="topRightSection">
                <div>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div id="search">
                    Search
                </div>
                <div id="signIn">Sign In <select name="" id="downArrow">
                </select></div>
                
                <div id="cartButton"><a href="#"><i class="fa-solid fa-lock"></i></a></div>
            </div>   
            </div>`;
}

export {navbar};