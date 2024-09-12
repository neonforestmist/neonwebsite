window.onpopstate = function() { //force reload on chromium
    location.reload();
}
window.onunload = function() { }; //stop firefox from caching
var loading = false;
$(function () {
    $('#form').on('submit',function (e) {
        e.preventDefault();
        input(document.getElementById("input").value);
    });
});
function input(input)
{
    if (input == "" || loading)
    {
        return;
    }
    var originalInput = input;
    input = input.toLowerCase();
    if (input == "clear" || input == "cls")
    {
        $('#output').empty();
        document.getElementById("input").value = "";
        return;
    }
    var p = document.createElement('p');
    var inp = document.createElement('p');
    switch (input)
    {
        case "info":
        case "help":
            p.innerHTML = "<span onclick=\"input('about')\">about</span>   - Learn more about me.<br><span onclick=\"input('clear')\">clear</span>   - Clear the terminal.";
            break;
        case "about":
            p.innerHTML = "N/A";
            break;
        case "welcome":
            p.innerHTML = "Welcome to my website. Use <span onclick=\"input('quit')\">quit</span> to be sent to a normal user interface. Use <span onclick=\"input('help')\">help</span> to list all commands.";
            break;
        case "quit":
            p.className = "loading";
            p.innerHTML = "Redirecting to home page...";
            inp.innerHTML = `<i>root@neon-website</i>:<b>~</b>$ ${originalInput}`;
            document.getElementById("output").appendChild(inp);
            document.getElementById("output").appendChild(p);
            document.getElementById("input").value = "";
            document.getElementById("inputLine").remove();
            loading = true;
            setTimeout(function(){
                p.className = "";
                p.innerHTML = "Redirected to home."
                loading = false;
                window.location.href = "/neonforestmist.github.io/";
            }, 5000);
            return;
        case "../settings":
            p.className = "loading";
            p.innerHTML = "Redirecting to settings page...";
            inp.innerHTML = `<i>root@neon-website</i>:<b>~</b>$ ${originalInput}`;
            document.getElementById("output").appendChild(inp);
            document.getElementById("output").appendChild(p);
            document.getElementById("input").value = "";
            document.getElementById("inputLine").remove();
            loading = true;
            setTimeout(function(){
                p.className = "";
                p.innerHTML = "Redirected to Settings."
                loading = false;
                window.location.href = "/neonforestmist.github.io/settings/";
            }, 5000);
            return;
        case "../home":
                p.className = "loading";
                p.innerHTML = "Redirecting to home page...";
                inp.innerHTML = `<i>root@neon-website</i>:<b>~</b>$ ${originalInput}`;
                document.getElementById("output").appendChild(inp);
                document.getElementById("output").appendChild(p);
                document.getElementById("input").value = "";
                document.getElementById("inputLine").remove();
                loading = true;
                setTimeout(function(){
                    p.className = "";
                    p.innerHTML = "Redirected to Home."
                    loading = false;
                    window.location.href = "/neonforestmist.github.io/";
                }, 5000);
                return;
        case "../games":
            p.className = "loading";
            p.innerHTML = "Redirecting to games page...";
            inp.innerHTML = `<i>root@neon-website</i>:<b>~</b>$ ${originalInput}`;
            document.getElementById("output").appendChild(inp);
            document.getElementById("output").appendChild(p);
            document.getElementById("input").value = "";
            document.getElementById("inputLine").remove();
            loading = true;
            setTimeout(function(){
                p.className = "";
                p.innerHTML = "Redirected to Games."
                loading = false;
                window.location.href = "/neonforestmist.github.io/games/";
            }, 5000);
            return;    
        case "../test":
                p.className = "loading";
                p.innerHTML = "Redirecting to tester page...";
                inp.innerHTML = `<i>root@neon-website</i>:<b>~</b>$ ${originalInput}`;
                document.getElementById("output").appendChild(inp);
                document.getElementById("output").appendChild(p);
                document.getElementById("input").value = "";
                document.getElementById("inputLine").remove();
                loading = true;
                setTimeout(function(){
                    p.className = "";
                    p.innerHTML = "Redirected to Test."
                    loading = false;
                    window.location.href = "/neonforestmist.github.io/test/";
                }, 5000);
                return;    
        default:
            p.innerHTML = `${originalInput} : The term '${originalInput}' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again.`;
            break;
    }
    inp.innerHTML = `<i>root@neon-website</i>:<b>~</b>$ ${originalInput}`;
    document.getElementById("output").appendChild(inp);
    document.getElementById("output").appendChild(p);
    document.getElementById("input").value = "";
}
