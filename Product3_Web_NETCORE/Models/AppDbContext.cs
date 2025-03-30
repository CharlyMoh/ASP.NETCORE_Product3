using Microsoft.EntityFrameworkCore;
using System.Linq;
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Usuario> Usuarios { get; set; }
    public DbSet<Encuesta> Encuestas { get; set; }
    public DbSet<Respuesta> Respuestas { get; set; }

}
