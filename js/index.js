const lorem = [
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type 
    specimen book. It has survived not only five centuries, but also the leap into 
    electronic typesetting, remaining essentially unchanged. It was popularised in 
    the 1960s with the release of Letraset sheets containing Lorem Ipsum 
    passages, and more recently with desktop publishing software like Aldus PageMaker
    including versions of Lorem Ipsum.`,
    `It is a long established fact that a reader will be distracted by the readable
    content of a page when looking at its layout. The point of using Lorem Ipsum is
    that it has a more-or-less normal distribution of letters, as opposed to using 
    'Content here, content here', making it look like readable English. Many desktop 
    publishing packages and web page editors now use Lorem Ipsum as their default model 
    text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
    Various versions have evolved over the years, sometimes by accident, sometimes on purpose 
    (injected humour and the like).`,
    `There are many variations of passages of Lorem Ipsum available, but the majority 
    have suffered alteration in some form, by injected humour, or randomised words 
    which don't look even slightly believable. If you are going to use a passage of 
    Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the 
    middle of text. All the Lorem Ipsum generators on the Internet tend to repeat 
    predefined chunks as necessary, making this the first true generator on the Internet. 
    It uses a dictionary of over 200 Latin words, combined with a handful of model sentence 
    structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is 
    therefore always free from repetition, injected humour, or non-characteristic words etc`,
    `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
    `"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam 
    est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius 
    modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
    quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel 
    illum qui dolorem eum fugiat quo voluptas nulla pariatur?"`,
    `"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled
    and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot 
    foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail 
    in their duty through weakness of will, which is the same as saying through shrinking from toil 
    and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our 
    power of choice is untrammelled and when nothing prevents our being able to do what we like 
    best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances 
    and owing to the claims of duty or the obligations of business it will frequently occur that 
    pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds 
    in these matters to this principle of selection: he rejects pleasures to secure other greater 
    pleasures, or else he endures pains to avoid worse pains."`
]

const form = document.getElementById("lorem-form");
const input = document.getElementById("input");
const loremText = document.querySelector(".lorem-text");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let value = Number(input.value);
    let random = Math.floor(Math.random() * lorem.length);
    
    if(value <= 0 || value > 6){
        let p = `<p>${lorem[random]}</p>`
        loremText.innerHTML = p;
    }else if(value <= 0){
        value = 1;
    }
    else{
        let tempText = lorem.slice(0, value);
        tempText = tempText.map((item) => {
            return `<p>${item}</p>`
        })
        loremText.innerHTML = tempText;
    }
})