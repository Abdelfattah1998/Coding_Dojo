import java.util.HashMap;

public class Hashmatique {
    public static void Challange() {
        HashMap<String, String> map = new HashMap<String, String>();
        map.put("WHITE CHRISTMAS", "WHITE CHRISTMAS................");
        map.put("SHAPE OF YOU", "SHAPE OF YOU.....................");
        map.put("DESPACITO", "DESPACITO.........................");
        map.put("CANDLE IN THE WIND", "CANDLE IN THE WIND..................");

        String val = map.get("DESPACITO");

        for (String key : map.keySet()) {
            System.out.println(String.format("Track: %s: Lyrics: %s", key, map.get(key)));
        }


    }
}