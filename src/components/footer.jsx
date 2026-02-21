
function Footer(){

    return(
        <footer>
            <hr/>
            Shaw &copy;{new Date().getFullYear()} CSUMB ILP Portfolio
            <figure>
                <img src="/img/logo-ds.jpg" alt="Logo of CSUMB" style={{ maxWidth: "100px", maxHeight: "100px", borderRadius: "12px" }} />
            </figure>
        </footer>
    );
}

export default Footer