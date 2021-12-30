function Randomize(max: number): number{
    let min = 1;
    return Math.floor(Math.random() * (max - min + 1)) +min;
};

function CustomRandomChar(pCount: number = 15): string {
    const Chars = '2uPQv6ABCmDEGlnHZIKL5tNO9RSTUVW7XYMabc4defJhijkoFpqr3swx8yz';
    let S: string;
    let N: number;
    S = '';
    for (let i = 1; i < pCount; i++) {
        N = Randomize(Chars.length);
        S = S + Chars[N];
    };
    return S;
};

function onActivate() {
};

function onShow() {
    document.getElementById('hlaJudul').innerHTML = 'Ini Demonstrasi Render Judul Dari Typescript';
};

function onbtnGenerateClick() {
    let dObj = document.getElementById('pnlDaftar');
    let edText = (document.getElementById('edText') as HTMLInputElement);
    for (let i = 1; i <= Number(edText.value); i++) {
        let lObj = document.createElement('li');
        lObj.id = CustomRandomChar(6);
        lObj.innerHTML = 'List Index '+i;
        lObj.className = 'list-group-item';
        dObj.append(lObj);
    };
};

function onbtnClearClick() {
    let dObj = document.getElementById('pnlDaftar');
    for (let i = dObj.children.length; i >= 0; i--) {
        dObj.removeChild(dObj.lastChild);
    };
};

onShow();
onActivate();
