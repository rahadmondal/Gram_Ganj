export const forgotPasswordEmailTemp = (url) => {
  const emailHtml = `
    <!DOCTYPE html>
    <html lang="bn">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>পাসওয়ার্ড রিসেট</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #fdf8f2; font-family: Arial, sans-serif; color: #333333;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #fdf8f2; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden; max-width: 600px;">
              
              <tr>
                <td style="background-color: #2d5a27; padding: 30px; text-align: center;">
                  <span style="font-size: 36px; color: #ffffff;">🌿</span>
                  <h1 style="color: #ffffff; margin: 10px 0 0 0; font-size: 26px; font-weight: bold; letter-spacing: 1px;">গ্রামীণ বাজার</h1>
                  <p style="color: #7daf6a; margin: 5px 0 0 0; font-size: 14px;">খাঁটি পণ্যের সমাহার</p>
                </td>
              </tr>

              <tr>
                <td style="padding: 40px 30px;">
                  <h2 style="color: #2d5a27; font-size: 22px; margin-top: 0; margin-bottom: 20px;">পাসওয়ার্ড রিসেট</h2>
                  
                  <p style="font-size: 16px; line-height: 1.6; color: #555555; margin-bottom: 24px;">
                    প্রিয় গ্রাহক,<br><br>
                    আমরা আপনার <strong>গ্রামীণ বাজার</strong> অ্যাকাউন্টের পাসওয়ার্ড রিসেট করার একটি অনুরোধ পেয়েছি। নতুন পাসওয়ার্ড সেট করতে অনুগ্রহ করে নিচের বাটনে ক্লিক করুন:
                  </p>
                  
                  <div style="text-align: center; margin-bottom: 30px;">
                    <a href="${url}" style="display: inline-block; background-color: #2d5a27; color: #ffffff; font-size: 16px; font-weight: bold; text-decoration: none; padding: 14px 30px; border-radius: 8px;">নতুন পাসওয়ার্ড সেট করুন</a>
                  </div>
                  
                  <p style="font-size: 14px; line-height: 1.6; color: #777777;">
                    যদি উপরের বাটনটি কাজ না করে, তবে নিচের লিংকটি কপি করে আপনার ব্রাউজারে পেস্ট করুন:<br>
                    <a href="${url}" style="color: #2d5a27; word-break: break-all;">${url}</a>
                  </p>
                  
                  <hr style="border: none; border-top: 1px solid #eeeeee; margin: 30px 0;">
                  
                  <p style="font-size: 13px; line-height: 1.5; color: #999999; margin: 0;">
                    আপনি যদি পাসওয়ার্ড পরিবর্তনের এই অনুরোধটি না করে থাকেন, তবে এই ইমেইলটি এড়িয়ে যান। আপনার অ্যাকাউন্ট সম্পূর্ণ নিরাপদ আছে।
                  </p>
                </td>
              </tr>

              <tr>
                <td style="background-color: #f9f9f9; padding: 20px; text-align: center; border-top: 1px solid #eeeeee;">
                  <p style="font-size: 12px; color: #999999; margin: 0;">
                    © ২০২৬ গ্রামীণ বাজার। সর্বস্বত্ব সংরক্ষিত।<br>
                    ঢাকা, বাংলাদেশ
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  return emailHtml;
};
