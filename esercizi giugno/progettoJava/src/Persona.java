public class Persona {
    private String nome;
    private String cognome;
    private String sesso;
    private Integer eta;

    public Persona() {
    }

    //SETTER
    public void setCognome(String cognome){
        this.cognome = cognome;
    }

    //GETTER
    public String getCognome() {
        return cognome;
    }

    //SETTER
    public void setNome(String nome){
        this.nome = nome;
    }

    //GETTER
    public String getNome() {
        return nome;
    }

    public String nomeCompleto (){
        return nome + " " + cognome;
    }
}
