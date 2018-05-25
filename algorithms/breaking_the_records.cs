using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;

class Solution {

    // Complete the breakingRecords function below.
    static int[] breakingRecords(int[] score) {
        int minCount = 0;
        int min = score[0];
        int maxCount = 0;
        int max = score[0];
        foreach(int gameScore in score)
        {
            if(gameScore < min){
                min = gameScore;
                minCount++;
            }
            if(gameScore > max){
                max = gameScore;
                maxCount++;
            }
        }
        int[] records = {maxCount, minCount};
        return records;
    }

    static void Main(string[] args) {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        int n = Convert.ToInt32(Console.ReadLine());

        int[] score = Array.ConvertAll(Console.ReadLine().Split(' '), scoreTemp => Convert.ToInt32(scoreTemp))
        ;
        int[] result = breakingRecords(score);

        textWriter.WriteLine(string.Join(" ", result));

        textWriter.Flush();
        textWriter.Close();
    }
}
