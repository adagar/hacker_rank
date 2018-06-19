using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

class Solution {

    /*
     * Complete the pageCount function below.
     */
    static int pageCount(int n, int p) {
        /*
         * Write your code here.
         */
        var start = 1;
        var direction = 2;
        var pages = new int[] {0, 1};
        var count = 0;
        
        if( p > n / 2)
        {
            start = n;
            direction = -2;
            if(n % 2 == 1)
            {
                pages[0] = n - 1;
                pages[1] = n; 
            }
            else
            {
                pages[0] = n;
                pages[1] = n + 1;
            }
            
        }
        while (pages[0] != p && pages[1] != p)
        {
            pages[0] += direction;
            pages[1] += direction;
            count++;
        }
        return count;

    }

    static void Main(string[] args) {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        int n = Convert.ToInt32(Console.ReadLine());

        int p = Convert.ToInt32(Console.ReadLine());

        int result = pageCount(n, p);

        textWriter.WriteLine(result);

        textWriter.Flush();
        textWriter.Close();
    }
}
