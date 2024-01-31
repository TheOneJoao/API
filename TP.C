#include <stdio.h>
#include <math.h>

double timeInDec(double H, double p) { return 7*H*p; }
double timeInFormat(double timeInDec) { return .4*floor(timeInDec) + .6*timeInDec; }

int main(int argc, char **argv) {
  int i;
  int H = 5;
  double optPool = .80;
  double percentages[11] = {
    .05, .0625, .1, .125,
    .15625, .1875, .25, .3125,
    .35, .4375, .45};

  printf("Prcnt / pndr\t\tHH semana/dia\n");
  for(i = 0; i < 11; i++) {
    double ponderedPercentage = optPool*percentages[i];
    double tDec = timeInDec(H, percentages[i]);

    double tFormat = timeInFormat(tDec); 
    double tFormatPerDay = timeInFormat(tDec / 7);

    printf("%.3f%/%.3f\t\t%.2f/%.2f\n",
        percentages[i], ponderedPercentage, tFormat, tFormatPerDay);
  }

  return 0;
}
