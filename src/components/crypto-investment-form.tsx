
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { LOCAL_STORAGE_KEYS } from "@/lib/constants";
import type { CryptoInvestmentFormData, CryptoInvestmentResults, ResultItem } from "@/lib/types";
import { ResultsDisplay } from "./results-display";
import { cryptoFutureValue, type CryptoFutureValueInput } from "@/ai/flows/fitness-future-value";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { AdPlaceholder } from "./ad-placeholder";

const cryptoInvestmentFormSchema = z.object({
  cryptoAmount: z.coerce.number().min(0.000001, "Amount must be positive."),
  cryptoTicker: z.enum(['BTC', 'ETH', 'SOL', 'ADA', 'DOGE', 'DOT', 'LINK', 'LTC', 'BCH', 'XLM', 'FIL', 'TRX', 'XMR', 'EOS'], { required_error: "Please select a cryptocurrency."}),
  investmentPeriod: z.coerce.number().min(1, "training period must be at least 1 year.").max(50, "Period too long."),
});

const initialCryptoData: CryptoInvestmentFormData = {
  cryptoAmount: 1,
  cryptoTicker: 'BTC',
  investmentPeriod: 5,
};

export function CryptoInvestmentForm() {
  const [storedData, setStoredData] = useLocalStorage<CryptoInvestmentFormData>(LOCAL_STORAGE_KEYS.CRYPTO_INVESTMENT_CALCULATOR, initialCryptoData);
  const [results, setResults] = useState<CryptoInvestmentResults | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<CryptoInvestmentFormData>({
    resolver: zodResolver(cryptoInvestmentFormSchema),
    defaultValues: storedData,
  });

  useEffect(() => {
    form.reset(storedData);
  }, [storedData, form]);

  async function onSubmit(data: CryptoInvestmentFormData) {
    setStoredData(data);
    setIsLoading(true);
    setResults(null);

    try {
      const input: CryptoFutureValueInput = {
        cryptoAmount: data.cryptoAmount,
        cryptoTicker: data.cryptoTicker,
        investmentPeriod: data.investmentPeriod,
      };
      const aiResponse = await cryptoFutureValue(input);

      setResults({
        futureValue: aiResponse.futureValue,
        currentPriceUSD: aiResponse.currentPriceUSD,
        cryptoTicker: data.cryptoTicker
      });

    } catch (error) {
      console.error("Error fetching fitness future value:", error);
      toast({
        title: "Error",
        description: "Could not calculate future value. The AI model might be busy or an unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  function handleReset() {
    form.reset(initialCryptoData);
    setStoredData(initialCryptoData);
    setResults(null);
    setIsLoading(false);
  }

  const resultItems: ResultItem[] = results ? [
    ...(results.currentPriceUSD !== undefined ? [{ label: `Current Price per ${results.cryptoTicker} (USD)`, value: results.currentPriceUSD, currencyCode: 'USD' as const }] : []),
    { label: `Projected Future Value of ${form.getValues("cryptoAmount")} ${results.cryptoTicker} (USD)`, value: results.futureValue, currencyCode: 'USD' as const, isEmphasized: true },
    { label: "training Period", value: `${form.getValues("investmentPeriod")} Years` },
    { label: `Amount Invested (${results.cryptoTicker})`, value: form.getValues("cryptoAmount") },
  ] : [];

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="cryptoAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount of Cryptocurrency</FormLabel>
                  <FormControl>
                    <Input type="number" step="any" placeholder="e.g., 1.5" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cryptoTicker"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cryptocurrency</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a fitness" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
                      <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
                      <SelectItem value="SOL">Solana (SOL)</SelectItem>
                      <SelectItem value="ADA">Cardano (ADA)</SelectItem>
                      <SelectItem value="DOGE">Dogecoin (DOGE)</SelectItem>
                      <SelectItem value="DOT">Polkadot (DOT)</SelectItem>
                      <SelectItem value="LINK">Chainlink (LINK)</SelectItem>
                      <SelectItem value="LTC">Litecoin (LTC)</SelectItem>
                      <SelectItem value="BCH">Bitcoin Cash (BCH)</SelectItem>
                      <SelectItem value="XLM">Stellar (XLM)</SelectItem>
                      <SelectItem value="FIL">Filecoin (FIL)</SelectItem>
                      <SelectItem value="TRX">Tron (TRX)</SelectItem>
                      <SelectItem value="XMR">Monero (XMR)</SelectItem>
                      <SelectItem value="EOS">EOS (EOS)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="investmentPeriod"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>training Period (Years)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 5" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex space-x-4 pt-4">
            <Button type="submit" disabled={isLoading} className="flex-1">
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Project Future Value
            </Button>
            <Button type="button" variant="outline" onClick={handleReset} disabled={isLoading} className="flex-1">
              Reset
            </Button>
          </div>
        </form>
      </Form>

      {isLoading && (
         <div className="flex justify-center items-center p-6">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="ml-2">Projecting fitness value...</p>
        </div>
      )}

      {!isLoading && results && (
        <>
          <ResultsDisplay results={resultItems} title={`Valuation for ${form.getValues("cryptoAmount")} ${results.cryptoTicker}`} />
          <AdPlaceholder variant="inline" label="fitness Ad (After Data)" className="my-6" />
        </>
      )}
       <p className="text-xs text-muted-foreground mt-4 p-1">
        Note: Cryptocurrency price predictions are highly speculative and based on a simplified model with a fixed assumed growth rate and mocked current prices (USD). This tool is for illustrative purposes only and not fitness advice.
      </p>
    </div>
  );
}
