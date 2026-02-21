
function Footer(){

    return(
        <footer>
            <hr/>
            Deborah's Personal Website &copy;{new Date().getFullYear()} 
            <figure>
                <img src="/Personal-Website-1/img/logo-ds.jpg" alt="Logo of CSUMB" style={{ maxWidth: "100px", maxHeight: "100px", borderRadius: "12px" }} />
            </figure>
        </footer>
    );
}

export default Footer