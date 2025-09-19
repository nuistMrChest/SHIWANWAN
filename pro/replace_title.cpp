#include <iostream>
#include <fstream>
#include <string>
#include <filesystem>

namespace fs = std::filesystem;

int main() {
    std::string newTitle = "Projects - SHI WANWAN";

    for (const auto& entry : fs::directory_iterator(fs::current_path())) {
        if (entry.is_regular_file() && entry.path().extension() == ".html") {
            std::string filepath = entry.path().string();
            std::ifstream fin(filepath);
            if (!fin) {
                std::cerr << "无法打开文件: " << filepath << std::endl;
                continue;
            }

            std::string content((std::istreambuf_iterator<char>(fin)),
                                 std::istreambuf_iterator<char>());
            fin.close();

            size_t start = content.find("<title>");
            size_t end = content.find("</title>");

            if (start != std::string::npos && end != std::string::npos && end > start) {
                start += 7; // 跳过 <title>
                content.replace(start, end - start, newTitle);

                std::ofstream fout(filepath);
                fout << content;
                fout.close();

                std::cout << "修改成功: " << filepath << std::endl;
            } else {
                std::cout << "未找到<title>标签: " << filepath << std::endl;
            }
        }
    }

    std::cout << "处理完成！" << std::endl;
    return 0;
}
