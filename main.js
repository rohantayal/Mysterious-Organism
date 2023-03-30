// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (numOrg , arrDna) =>{
  return {
      arrDna,
      numOrg ,
      mutate(){
        let mutBase = math.floor((math.random()*this.arrDna.length));
        let randBase = returnRandBase();
        while( randBase !== this.arrDna[mutBase]){
          this.arrDna[mutBase] = randBase;
          randBase = returnRandBase();
      }
      return this.arrDna;
      } ,
      compareDNA(obj){
        let count=0;
        for( base of this.arrDna){
          for(let i=0; i<obj[dna].length;i++){
            if(obj.dna[i] === base)
              count++;
          }
        }
        console.log(`specimen #1 and specimen #2 have ${(count/obj.numOrg)*100}% DNA in common`);

      } ,
      willLikelySurvive(){
        let count=0;
        for(base of this.arrDna){
          if(base === 'C' || base === 'G')
            count++;
        }
        if((count/this.arrDna.length)*100 === 60)
          return true;
        else
          return false;
      }
  };
};
const survivingSpecimen = [];
let idCounter = 1;

while (survivingSpecimen.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg);
  }
  idCounter++;
}

console.log(survivingSpecimen)














