public class Operazioni {
    private Integer a;
    private Integer b;

    public Operazioni(){
    }

    //SETTER
    public void setA(Integer a){
        this.a = a;
    }

    //GETTER
    public Integer getA() {
        return a;
    }

    //SETTER
    public void setB(Integer b){
        this.b = b;
    }

    //GETTER
    public Integer getB() {
        return b;
    }

    public Integer addizione(){

        return this.a + this.b;

    }

    public Integer sottrazione(){

        return this.a - this.b;

    }

    public Integer moltiplicazione(){

        return this.a * this.b;

    }

    public Integer divisione(){

        return this.a / this.b;

    }

}
