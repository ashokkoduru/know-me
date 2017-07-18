$(function(){
    $("#typed").typed({
        strings: ["Full Stack Web Developer",
            "Python Enthusiast",
            "Computer Science Student"],
        typeSpeed: 1,
        loop: true
    });
});

jQuery(function($, undefined) {
    $('#term').terminal(function(command) {
        if (command !== '') {
            try {
                var result = window.eval(command);
                if (result !== undefined) {
                    this.echo(new String(result));
                }
            } catch(e) {
                this.error(new String(e));
            }
        } else {
            this.echo('');
        }
    }, {
        greetings: 'Be Smart enough, and never touch the mouse.',
        name: 'js_demo',
        height: 400,
        prompt: '&rarr; '
    });
});