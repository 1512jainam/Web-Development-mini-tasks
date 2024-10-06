function solution(D, T) {
    const truckT = ['Plastic', 'Glass', 'Metal'];
    const truckTi = {'Plastic': 0,'Glass': 0,'Metal': 0 };

    for (let type of truckT) {
        let maxD = 0;
        let totalT = 0;

        for (let i=0;i <D.length; i++) {
            if(T[i].includes(type)){
                maxD = i + 1;  
                totalT += (T[i].split(type).length - 1);  
            }
        }

        if (maxD > 0) {
            truckTi[type] = (2 * D.slice(0, maxD).reduce((a,b)=> a+b)) + totalT;
        }
    }
    return Math.max(...Object.values(truckTi));
}