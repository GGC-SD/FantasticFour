public double gpa;
public double userInputGpa;
public String outputGpa;
public double difference;

public String percentageReturnGpa()
{
	gpa = 3.45;
	difference = gpa - userInputGpa;
	difference = difference / 3.45;
	difference = difference * 100; 

	if (difference < 0)
	{
	outputGpa = "Your GPA is " + difference + " below the national average.";
	}
	else
	{
	outputGpa = "Your GPA is " + difference + " above the national average.";
	}
	return outputGpa;

}

public void returnGraph()
{
	if (difference > 0 && difference <= .57)
	{
		<img src="graph1.png">
	}
	else if (difference > .57 && difference <= 1.14)
	{
		<img src="graph2.png">
	}
	else if (difference > 1.14 && difference <= 1.74)
	{
		<img src="graph3.png">
	}
	else if (difference > 1.74 && difference <= 2.28)
	{
		<img src="graph4.png">
	}
	else if (difference > 2.28 && difference <= 2.85)
	{
		<img src="graph5.png">
	}
	else if (difference > 2.85 && difference <= 3.42)
	{
		<img src="graph6.png">
	}
	else
	{
		<img src="graph7.png">
	}
}