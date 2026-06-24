using System;

namespace finance_notification
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("finance-notification - Console Application");
            ProcessData();
        }

        static void ProcessData()
        {
            // Sample processing logic
            string input = Console.ReadLine();
            if (input != null)
            {
                Console.WriteLine(input.ToUpper());
            }
        }
    }
}
