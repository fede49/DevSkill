public class Calcolatore {
    public static void main(String[] args) {

        Operazioni numeri = new Operazioni();
        numeri.setA(10);
        numeri.setB(2);

        Integer addizione = numeri.addizione();
        System.out.println(addizione);

        Integer sottrazione = numeri.sottrazione();
        System.out.println(sottrazione);

        Integer moltiplicazione = numeri.moltiplicazione();
        System.out.println(moltiplicazione);

        Integer divisione = numeri.divisione();
        System.out.println(divisione);

    }
}
