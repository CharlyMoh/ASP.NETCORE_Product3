public class Respuesta
{
    public int Id { get; set; }
    public int EncuestaId { get; set; }
    public int PreguntaNumero { get; set; }
    public string RespuestaSeleccionada { get; set; }

    public Encuesta Encuesta { get; set; }
}
