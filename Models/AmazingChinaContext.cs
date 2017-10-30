using Microsoft.EntityFrameworkCore;

namespace AmazingChina.Models
{
    public class AmazingChinaContext : DbContext
    {
        public AmazingChinaContext (DbContextOptions<AmazingChinaContext> options)
            : base(options)
        {
        }

        public DbSet<AmazingChina.Models.Movie> Movie { get; set; }
    }
}