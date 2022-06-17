public class ProgettoJava {
    public static void main(String[] args) {

        Persona utente = new Persona();

        utente.setNome("Federica");
        utente.setCognome("De Marco");


        String nomeCompleto = utente.nomeCompleto();
        System.out.println(nomeCompleto);
    }
}
