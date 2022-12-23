const css = `body {
    background-color: #000000;
}
#application-canvas{
    margin-top: 0px !important;
    position: absolute !important;
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%) !important;
}
#application-splash-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #2e2a57;
}
#application-splash {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    display: flex !important;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
}
#splash-logo {
    width: 100px;
}
#splash-progress-bar-container {
    height: 4px;
    width: 200px;
    background-color: #1d292c;
}
#splash-progress-bar {
    width: 0%;
    height: 100%;
    background-color: #DDB43F;
}`;

(pc.script as any).createLoadingScreen(function (app: pc.AppBase) {
    let style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    // splash wrapper
    let wrapper = document.createElement("div");
    wrapper.id = "application-splash-wrapper";
    document.body.appendChild(wrapper);

    // splash
    let splash = document.createElement("div");
    splash.id = "application-splash";
    wrapper.appendChild(splash);
    splash.style.display = "none";

    let logo = document.createElement("img");
    logo.id = "splash-logo";
    logo.src = "https://roobet.com/images/logomark.svg";
    splash.appendChild(logo);
    logo.onload = function () {
        splash.style.display = "block";
    };

    let container = document.createElement("div");
    container.id = "splash-progress-bar-container";
    splash.appendChild(container);

    let bar = document.createElement("div");
    bar.id = "splash-progress-bar";
    container.appendChild(bar);

    let setProgress = function (value: number) {
        if(bar) {
            value = Math.min(1, Math.max(0, value));
            bar.style.width = value * 100 + "%";
        }
    };

    app.on("preload:end", function () {
        app.off("preload:progress");
    });
    app.on("preload:progress", setProgress);
    app.on("start", async () => {
        wrapper.parentElement.removeChild(wrapper);
    });
});