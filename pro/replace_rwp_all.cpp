#include <iostream>
#include <fstream>
#include <string>
#include <filesystem>
#include <cstring>
namespace fs = std::filesystem;

int main() {
    std::string exePath = fs::current_path().string();

    for (const auto& entry : fs::directory_iterator(exePath)) {
        if (entry.path().extension() == ".html") {
            std::string filePath = entry.path().string();
            std::ifstream inFile(filePath);
            if (!inFile) {
                std::cerr << "无法打开文件: " << filePath << std::endl;
                continue;
            }

            std::string content((std::istreambuf_iterator<char>(inFile)),
                                 std::istreambuf_iterator<char>());
            inFile.close();

            // 替换第一个 <div class="rwp">
            size_t pos = content.find("<div class=\"rwp\">");
            if (pos != std::string::npos) {
                content.replace(pos, strlen("<div class=\"rwp\">"), "<h2>");

                // 从当前位置往后找第一个 </div>
                size_t endPos = content.find("</div>", pos);
                if (endPos != std::string::npos) {
                    content.replace(endPos, strlen("</div>"), "</h2>");
                }
            }

            // 写回文件
            std::ofstream outFile(filePath);
            if (!outFile) {
                std::cerr << "无法写入文件: " << filePath << std::endl;
                continue;
            }
            outFile << content;
            outFile.close();

            std::cout << "已修改文件: " << filePath << std::endl;
        }
    }

    std::cout << "全部处理完成！" << std::endl;
    return 0;
}
