document.addEventListener("DOMContentLoaded", ()=>{

    const Fills = document.querySelectorAll(".fill");
    const BPDF = document.querySelector("#PDF");
    const Paper = document.querySelector("#Paper");
    const ScreenSkills = document.querySelector("#ScreenSkills");
    const BlackScreen = document.querySelector("#BlackScreen");
    const CrossClose = document.querySelector("#CrossClose");
    const Opacity = document.querySelector("#Opacity");
    const Chain = document.querySelector("#Chain");
    const RedLight = document.querySelector("#RedLight");
    const Steam = document.querySelector("#Steam");
    const Canvas = document.querySelector("#Canvas");

    const AboutMeText = document.querySelector(".AboutMeText");
    const ResumeText = document.querySelector(".ResumeText");
    const ContactText = document.querySelector(".ContactText");
    const SkillContent = document.querySelector(".SkillContent");
    const GalleryContent = document.querySelector("#GalleryContent");

    const SPEEDGEAR = 5;

    /*Animation clique croix rouge-----------------------------------------------------------*/
    CrossClose.addEventListener("click", () => {
        Fills.forEach((e, i, l) => {e.classList.add("hidden")})
        ScreenSkills.classList.add("hidden");
        BlackScreen.classList.add("hidden");
        Chain.classList.add("foldedC");
        Chain.classList.remove("unfolded");
        Canvas.classList.remove("unfolded");
        Canvas.classList.remove("front");
        Canvas.classList.add("folded");
        Steam.classList.add("hidden");

        AboutMeText.classList.add("hidden");
        ResumeText.classList.add("hidden");
        ContactText.classList.add("hidden");
        SkillContent.classList.add("hidden");
        GalleryContent.classList.add("hidden");

        CrossClose.classList.add("hidden");
        Opacity.classList.add("hidden");
        Steam.src = "images/vapeur/v1.png";
    });

    //BOUTON PDF----------------------------------------------------------------------------
    document.querySelectorAll(".PDF").forEach((e,i,l) => e.addEventListener("click", () => {
        //malheureusement, il ne reste qu'une feuille de papier dans l'imprimante
        //donc on ne peut imprimer qu'une seule fois X)
        //donc le levier reste baisser X)
        BPDF.src = "images/PDFBas.png";
        Paper.classList.remove("hidden");
        setTimeout(()=>{
             location.href = "Manon_Bonnot_CV.pdf";
        }, 200);
    }));

    //BOUTON ABOUTME----------------------------------------------------------------------------
    document.querySelectorAll(".AboutMe").forEach((e,i,l) => e.addEventListener("click", () => {
        //liquide tube menu
        Fills.forEach((e, i, l) => {
            if (i>=0) {
                e.classList.remove("hidden")
            }
        })
        BlackScreen.classList.remove("hidden");
        AboutMeText.classList.remove("hidden");
        CrossClose.classList.remove("hidden");
        Opacity.classList.remove("hidden");
    }));


    //BOUTON RESUME----------------------------------------------------------------------------
    document.querySelectorAll(".Resume").forEach((e,i,l) => e.addEventListener("click", () => {
        //liquide tube menu
        Fills.forEach((e, i, l) => {
            if (i>=1) {
                e.classList.remove("hidden")
            }
        })
        BlackScreen.classList.remove("hidden");
        ResumeText.classList.remove("hidden");
        CrossClose.classList.remove("hidden");
        Opacity.classList.remove("hidden");
    }));

    //BOUTON SKILLS----------------------------------------------------------------------------
    document.querySelectorAll(".Skills").forEach((e,i,l) => e.addEventListener("click", () => {
        //liquide tube menu
        Fills.forEach((e, i, l) => {
            if (i>=2) {
                e.classList.remove("hidden")
            }
        });

        ScreenSkills.classList.remove("hidden");
        SkillContent.classList.remove("hidden");
        CrossClose.classList.remove("hidden");
        Opacity.classList.remove("hidden");
        
        /*Animations*/
        const Rule = document.querySelector("#Rule");
        const RuleHeight = Rule.offsetHeight;
        const Bun = document.querySelector("#Bun");
        let ListeTubeBun = [RuleHeight*0.4, RuleHeight*0.6, RuleHeight*0.7, RuleHeight*0.6, RuleHeight*0.7, RuleHeight*0.6, RuleHeight*0.6];
        let ListeEtiquetteBun = ["C", "C#", "HTML/CSS", "PHP", "JS", "SQL", "Python"];
        const Bdeux = document.querySelector("#Bdeux");
        let ListeTubeBdeux = [RuleHeight*0.9, RuleHeight*0.6, RuleHeight*0.9, RuleHeight*0.4, RuleHeight*0.6, 0, 0];
        let ListeEtiquetteBdeux = ["Krita", "Illustrator", "Publisher", "Gimp", "Photofiltre", null, null];
        const Btrois = document.querySelector("#Btrois");
        let ListeTubeBtrois = [RuleHeight*0.9, RuleHeight*0.8, RuleHeight*0.9, RuleHeight*0.8, RuleHeight*0.4, RuleHeight*0.6, RuleHeight*0.4];
        let ListeEtiquetteBtrois = ["Word", "Excel", "PowerPoint", "AdobeXD", "GitHub", "Unity", "Unreal Engine"];
        const Bquatre = document.querySelector("#Bquatre");
        let ListeTubeBquatre = [RuleHeight*0.9, RuleHeight*0.7, RuleHeight*0.2, 0, RuleHeight*0.8, RuleHeight*0.9, RuleHeight*0.7];
        let ListeEtiquetteBquatre = ["French", "English", "German", null, "Organization", "Work", "Outgoing"];

        const STube = document.querySelectorAll(".Stube");
        const SEtiquette = document.querySelectorAll(".SEtiquette");

        /*Affichage selon le bouton*/
        Bun.addEventListener("click", () => {
            STube.forEach((t, i, l) => {
                t.style.height = ListeTubeBun[i]+"px";
            })
            SEtiquette.forEach((e, i, l) => {
                e.innerHTML = ListeEtiquetteBun[i];
            })
        });
        Bdeux.addEventListener("click", () =>{
            STube.forEach((t, i, l) => {
                t.style.height = ListeTubeBdeux[i]+"px";
            })
            SEtiquette.forEach((e, i, l) => {
                e.innerHTML = ListeEtiquetteBdeux[i];
            })
        });
        Btrois.addEventListener("click", () =>{
            STube.forEach((t, i, l) => {
                t.style.height = ListeTubeBtrois[i]+"px";
            })
            SEtiquette.forEach((e, i, l) => {
                e.innerHTML = ListeEtiquetteBtrois[i];
            })
        });
        Bquatre.addEventListener("click", () =>{
            STube.forEach((t, i, l) => {
                t.style.height = ListeTubeBquatre[i]+"px";
            })
            SEtiquette.forEach((e, i, l) => {
                e.innerHTML = ListeEtiquetteBquatre[i];
            })
        });

    }));

    //CANVAS (GALLERY)--------------------------------------------------------------------------------------
    document.querySelectorAll(".HandleCanvas").forEach((e,i,l) => e.addEventListener("click", () => {
        //liquide tube menu
        Fills.forEach((e, i, l) => {
            if (i>=3) {
                e.classList.remove("hidden")
            }
        })

        /*dépliage ou retrait de la toile*/
        Canvas.classList.add("front");
        setTimeout(() => {
            Canvas.classList.remove("folded");
            Canvas.classList.add("unfolded");
            Opacity.classList.remove("hidden");
            CrossClose.classList.remove("hidden");
        }, 250);
        setTimeout(()=>{
            GalleryContent.classList.remove("hidden");
        }, 700);
    }));

    //CHAIN (CONTACT)--------------------------------------------------------------------------------------
    document.querySelectorAll(".Chain").forEach((e,i,l) => e.addEventListener("click", () => {
        //liquide tube menu
        Fills.forEach((e, i, l) => {
            if (i>=4) {
                e.classList.remove("hidden");
            }
        });
        Chain.classList.remove("foldedC");
        Chain.classList.add("unfolded");

        //alarme
        //NOTE : L'alarme peut parfois avoir un petit lag au moment de son déclenchement
        //       que je n'arrive pas à expliquer
        let audioAlarm = new Audio('son/alarm.mp3');
        for (let i = 0; i < 2; i++) {
            setTimeout(()=>{
                audioAlarm.play();
                RedLight.classList.remove("hidden");
                setTimeout(()=>{
                    RedLight.classList.add("hidden");
                }, 900);
            }, 900+i*1800);
        };

        //affichage progressif de la vapeur
        setTimeout(()=>{
            let numImg = 1;
            Steam.classList.remove("hidden");
            let ImgChanges = setInterval(()=>{
                if(numImg <= 30){
                    Steam.src = "images/vapeur/v" + numImg + ".png";
                }
                else{
                    clearInterval(ImgChanges);
                    ContactText.classList.remove("hidden");
                    CrossClose.classList.remove("hidden"); 
                }
                numImg++;
            },65);
        }, 4000);
        

    }));

    //prechargement images vapeur
    //(Je voulais utiliser la fonction preload mais elle n'est pas compatible avec mozilla firefox)
    let i = 0;
    let preload = setInterval(()=>{
        i++;
        if(i <= 30){
            Steam.src = "images/vapeur/v" + i + ".png";
        }
        else{
            clearInterval(preload); 
            Steam.src = "images/vapeur/v1.png";
            delete i
        }
    },200);

    //AUTRES-----------------------------------------------------------------------------------------------
    // Fonction qui applique une rotation régulière sur tous les éléments qui ont la classe .rotate
    /*document.querySelectorAll(".rotate").forEach((e,i,l) => {
        e.style.transform = "rotate(0.1deg)"
        setInterval(() => {
            //                              conversion en int grace à '|0'
            e.style.transform = "rotate("+(((e.style.transform.match(/(-?\d+)/i)[1]|0) + SPEEDGEAR)%360)+"deg)"
        }, 100)
    });*/

    // Fonction qui applique une rotation inversée régulière sur tous les éléments qui ont la classe .rotateInv
    /*document.querySelectorAll(".rotateInv").forEach((e,i,l) => {
        e.style.transform = "rotate(0.1deg)"
        setInterval(() => {
            //                              conversion en int grace à '|0'
            e.style.transform = "rotate("+(((e.style.transform.match(/(-?\d+)/i)[1]|0) - SPEEDGEAR)%360)+"deg)"
        }, 100)
    });*/

    //PS : Pour des problèmes de compatibilité sur les différents navigateurs, j'ai du faire les rotations en css.

})