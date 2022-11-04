class ColaGenerator {
    constructor() {
        this.itemList = document.querySelector('.list-item');
    }
    setup(){
        this.loadData((json)=> {
            this.colaFactory(json);
        });
    }
    
    async loadData(callback) {
        const respose =  await fetch('src/js/item.json');

        if(respose.ok) {
            callback(await respose.json()); // 응답 본문을 읽으면서 객체형태로 파싱합니다.
        } else {
            alert('통신에러' + respose.status);
        }
    }

    colaFactory(data) {
        const docFrag = document.createDocumentFragment();
        data.forEach((el) => {
            const item = document.createElement('li')
            const itemTemplate = `
            <button type="button" class="btn-item" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
                <img src="./src/images/${el.img}" alt="" class="img-item">
                <strong class="tit-item">${el.name}</strong>
                <span class="txt-price">${el.cost}원</span>
            </button>
            `;
            item.innerHTML = itemTemplate;
            this.itemList.appendChild(item);
        });
        this.itemList.appendChild(docFrag);
    }
}

export default ColaGenerator;