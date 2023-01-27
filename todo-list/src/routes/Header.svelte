<header>
    <div id="logo"><a href="http://localhost:5173/">Serious Inc</a></div>
    <nav>
        <ul>
            <li><a href="./about">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Sponsors</a></li>
        </ul>
    </nav>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
        background-color: #0369A1;
        color: #FFFF;
        min-width: 400px;
        font-size: 1.3rem;
    }
    #logo {
        font-size: 1.8rem;
        cursor: pointer;
    }

    ul {
        display: flex;
        gap: 30px;
    }
    li {
        cursor: pointer;
    }
    li:hover, #logo:hover {
        color: #FBBF24;
    }
</style>