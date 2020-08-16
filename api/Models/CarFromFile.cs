namespace api.Models
{
    using System;
    using System.ComponentModel.DataAnnotations.Schema;

    public class CarFromFile
    {
        [Column("price")]
        public int price { get; set; }

        [Column("make")]
        public string make { get; set; }

        [Column("model")]
        public string model { get; set; }

        [Column("year")]
        public int year { get; set; }

        [Column("mileage")]
        public int mileage { get; set; }

        [Column("color")]
        public string color { get; set; }

        [Column("vin")]
        public string vin { get; set; }

        [Column("state")]
        public string state { get; set; }

        [Column("country")]
        public string country { get; set; }
    }
}