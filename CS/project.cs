using System.Globalization;

public class Project1
{
    public static void Main(string[] args)
    {
        Console.WriteLine("A)");
         for (int row = 1; row <= 10; row++)
        {
            for (int column = 1; column <= row; column++)
            {
                Console.Write("*");
            }


            Console.WriteLine();
        }
    }
}