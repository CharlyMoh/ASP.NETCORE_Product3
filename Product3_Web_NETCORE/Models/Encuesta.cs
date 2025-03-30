public class Encuesta
{
    public int Id { get; set; }
    public int UsuarioId { get; set; }
    public string Tema { get; set; }
    public DateTime Fecha { get; set; }

    public Usuario Usuario { get; set; }
}
